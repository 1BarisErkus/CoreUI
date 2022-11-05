import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './views/sidebar-components/components/base/base.component';
import { ButtonsComponent } from './views/sidebar-components/components/buttons/buttons.component';
import { ChartsComponent } from './views/sidebar-components/components/charts/charts.component';
import { FormsComponent } from './views/sidebar-components/components/forms/forms.component';
import { IconsComponent } from './views/sidebar-components/components/icons/icons.component';
import { NotificationsComponent } from './views/sidebar-components/components/notifications/notifications.component';
import { WidgetsComponent } from './views/sidebar-components/components/widgets/widgets.component';
import { DashboardComponent } from './views/sidebar-components/dashboard/dashboard.component';
import { PagesComponent } from './views/sidebar-components/extras/pages/pages.component';
import { ColorsComponent } from './views/sidebar-components/theme/colors/colors.component';
import { TypographyComponent } from './views/sidebar-components/theme/typography/typography.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'colors',
    component: ColorsComponent
  },
  {
    path: 'typography',
    component: TypographyComponent
  },
  {
    path: 'base',
    component: BaseComponent
  },
  {
    path: 'buttons',
    component: ButtonsComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'charts',
    component: ChartsComponent
  },
  {
    path: 'icons',
    component: IconsComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: 'widgets',
    component: WidgetsComponent
  },
  {
    path: 'pages',
    component: PagesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
