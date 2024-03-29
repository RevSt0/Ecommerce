import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Account } from 'app/core/auth/account.model';
import { AccountService } from 'app/core/auth/account.service';
import { AuthServerProvider } from 'app/core/auth/auth-jwt.service';
import { Login } from './login.model';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(
    private accountService: AccountService,
    private authServerProvider: AuthServerProvider,
    private router: Router,
  ) {}

  login(credentials: Login): Observable<Account | null> {
    return this.authServerProvider.login(credentials).pipe(
      mergeMap(() => this.accountService.identity(true)),
      tap((account: Account | null) => {
        if (account) {
          // Check user's role and navigate accordingly
          if (account.authorities.includes('ROLE_ADMIN')) {
            this.router.navigate(['/product']);
          } else if (account.authorities.includes('ROLE_USER')) {
            this.router.navigate(['/customer']);
          }
        }
      }),
    );
  }

  logout(): void {
    this.authServerProvider.logout().subscribe({ complete: () => this.accountService.authenticate(null) });
  }
}
