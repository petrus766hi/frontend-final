import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([{ path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) }]),
  Shell.childRoutes([
    { path: 'profile', loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule) },
  ]),
  Shell.childRoutes([
    {
      path: 'profile_update',
      loadChildren: () => import('./profile_update/profile_update.module').then((m) => m.Profile_UpdateModule),
    },
  ]),
  Shell.childRoutes([
    { path: 'lomba/:names', loadChildren: () => import('./lomba/lomba.module').then((m) => m.LombaModule) },
  ]),
  Shell.childRoutes([
    { path: 'listlomba', loadChildren: () => import('./listlomba/listlomba.module').then((m) => m.ListLombaModule) },
  ]),
  Shell.childRoutes([{ path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) }]),
  Shell.childRoutes([
    { path: 'register', loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule) },
  ]),
  Shell.childRoutes([
    {
      path: 'change_pwd',
      loadChildren: () => import('./change_pwd/change_pwd.module').then((m) => m.Change_PwdModule),
    },
  ]),
  Shell.childRoutes([
    { path: 'password', loadChildren: () => import('./password/password.module').then((m) => m.PasswordModule) },
  ]),
  Shell.childRoutes([
    {
      path: 'reset_password/:id',
      loadChildren: () => import('./reset_password/reset_password.module').then((m) => m.Reset_PasswordModule),
    },
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
