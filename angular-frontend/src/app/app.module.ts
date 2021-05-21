import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './@core/core.module';
/* ************+ Import module NbPasswordAuthStrategy strategy ************ */
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken, NbPasswordAuthStrategyOptions } from '@nebular/auth';
/* ************+ Import module NbPasswordAuthStrategy strategy ************ */
import { AuthGuardService } from './shared/api/services/auth-guard.service';
import { getDeepFromObject } from '@nebular/auth/helpers';
import { environment } from '../environments/environment';
// JQuery Import
import * as $ from 'jquery';
import { ThemeModule } from './@theme/theme.module';
import { NbToastrModule } from '@nebular/theme';
// import { RoundNumberPipe } from './shared/pipes/round-number.pipe';

const formSetting: any = {
  redirectDelay: 0,
  showMessages: {
    success: true,
    error: true,
  },
};

export function setReturnDataMessages(module: string, res: HttpResponse<Object>): Object[] { return [res]; }
export function setReturnDataErrors(module: string, res: HttpErrorResponse): Object[] { return [res]; }
export const defaultSettings: any = {
  forms: {
    login: {
      redirectDelay: 500, // delay before redirect after a successful login, while success message is shown to the user
      strategy: 'email',  // strategy id key.
      rememberMe: true,   // whether to show or not the `rememberMe` checkbox
      showMessages: {     // show/not show success/error messages
        success: true,
        error: true,
      },
    },
    register: {
      redirectDelay: 500,
      strategy: 'email',
      showMessages: {
        success: true,
        error: true,
      },
      terms: true,
    },
    requestPassword: {
      redirectDelay: 500,
      strategy: 'email',
      showMessages: {
        success: true,
        error: true,
      },
    },
    resetPassword: {
      redirectDelay: 500,
      strategy: 'email',
      showMessages: {
        success: true,
        error: true,
      },
    },
    logout: {
      redirectDelay: 500,
      strategy: 'email',
    },
    validation: {
      password: {
        required: true,
        minLength: 4,
        maxLength: 50,
      },
      email: {
        required: true,
      },
      fullName: {
        required: false,
        minLength: 4,
        maxLength: 50,
      },
    },
  },
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbToastrModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',

          token: {
            class: NbAuthJWTToken,
            key: 'accessToken', // this parameter tells where to look for the token
          },

          baseEndpoint: environment.apiUrl,
          login: {
            endpoint: 'login',
            method: 'post',
            redirect: {
              success: 'pages/home',
              failure: 'auth/login',
            },
          },
          logout: {
            endpoint: '/api/Auth/SignOut',
            method: 'post',
          },
          requestPass: {
            endpoint: 'Authentication/ChangePassword',
            method: 'put',
          },
          resetPass: {
            endpoint: 'Authentication/ChangePassword',
            method: 'post',
          },
          refreshToken: {
            endpoint: 'Authentication/ChangeCompany'
          },
          messages: {
            key: 'message', // this parameter tells where to look for the token
            getter: setReturnDataMessages,
          },

          errors: {
            key: 'message',
            getter: setReturnDataErrors,
          },
        }),
      ],
      forms: {
        login: formSetting,
        register: formSetting,
        requestPassword: formSetting,
        resetPassword: formSetting,
        logout: {
          redirectDelay: 0,
        },
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
