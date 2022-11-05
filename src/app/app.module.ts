import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './views/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './views/sidebar-components/dashboard/dashboard.component';
import { ColorsComponent } from './views/sidebar-components/theme/colors/colors.component';
import { TypographyComponent } from './views/sidebar-components/theme/typography/typography.component';
import { BaseComponent } from './views/sidebar-components/components/base/base.component';
import { ButtonsComponent } from './views/sidebar-components/components/buttons/buttons.component';
import { FormsComponent } from './views/sidebar-components/components/forms/forms.component';
import { ChartsComponent } from './views/sidebar-components/components/charts/charts.component';
import { IconsComponent } from './views/sidebar-components/components/icons/icons.component';
import { NotificationsComponent } from './views/sidebar-components/components/notifications/notifications.component';
import { WidgetsComponent } from './views/sidebar-components/components/widgets/widgets.component';
import { PagesComponent } from './views/sidebar-components/extras/pages/pages.component';
import { NavbarComponent } from './views/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    ColorsComponent,
    TypographyComponent,
    BaseComponent,
    ButtonsComponent,
    FormsComponent,
    ChartsComponent,
    IconsComponent,
    NotificationsComponent,
    WidgetsComponent,
    PagesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

