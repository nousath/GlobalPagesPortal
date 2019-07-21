import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import 'hammerjs';
import { SharedModule } from './core/modules/shared.module';
import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';
import { PagesModule } from './main/content/pages/pages.module';
import { FuseSplashScreenService } from './core/services/splash-screen.service';
import { FuseConfigService } from './core/services/config.service';
import { FuseNavigationService } from './core/components/navigation/navigation.service';

import { MarkdownModule } from 'angular2-markdown';
import { TranslateModule } from '@ngx-translate/core';
import { AuthGuard } from './core/services/auth.gard';

const appRoutes: Routes = [
    /*  {
         path        : 'apps/mail',
         loadChildren: './main/content/apps/mail/mail.module#FuseMailModule'
     },
     {
         path        : 'apps/chat',
         loadChildren: './main/content/apps/chat/chat.module#FuseChatModule'
     },
     {
         path        : 'apps/calendar',
         loadChildren: './main/content/apps/calendar/calendar.module#FuseCalendarModule'
     },
     {
         path        : 'apps/e-commerce',
         loadChildren: './main/content/apps/e-commerce/e-commerce.module#FuseEcommerceModule'
     },
     {
         path        : 'apps/todo',
         loadChildren: './main/content/apps/todo/todo.module#FuseTodoModule'
     },
     {
         path        : 'apps/file-manager',
         loadChildren: './main/content/apps/file-manager/file-manager.module#FuseFileManagerModule'
     },
     {
         path        : 'apps/contacts',
         loadChildren: './main/content/apps/contacts/contacts.module#FuseContactsModule'
     },
     {
         path        : 'apps/scrumboard',
         loadChildren: './main/content/apps/scrumboard/scrumboard.module#FuseScrumboardModule'
     }, */
    {
        path: '',
        redirectTo: '/pages/users-management',
        pathMatch: 'full',
        canActivate: [AuthGuard]
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        BrowserAnimationsModule,
        PagesModule,
        RouterModule.forRoot(appRoutes, { enableTracing: false, useHash: true  }),
        SharedModule,
        MarkdownModule.forRoot(),
        TranslateModule.forRoot(),
        FuseMainModule,
    ],
    providers: [
        FuseSplashScreenService,
        FuseConfigService,
        FuseNavigationService,
        AuthGuard
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
