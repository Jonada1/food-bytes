import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { SharedModule } from '../shared/shared.module';

export const tabRoutes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'diary',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../diary/diary.module').then(m => m.DiaryPageModule),
          }
        ]
      },
      {
        path: 'questionnaires',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../questionnaire/questionnaire.module').then(m => m.QuestionnaireModule)
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../settings/settings.module').then(m => m.SettingsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(tabRoutes), SharedModule],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
