import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([{ path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) }]),
  Shell.childRoutes([{ path: 'profile', loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule) }]),
  Shell.childRoutes([{ path: 'lomba', loadChildren: () => import('./lomba/lomba.module').then((m) => m.LombaModule) }]),
  Shell.childRoutes([{ path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) }]),
  Shell.childRoutes([{ path: 'register', loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule) }]),
  Shell.childRoutes([{ path: 'password', loadChildren: () => import('./password/password.module').then((m) => m.PasswordModule) }]),
  Shell.childRoutes([{ path: 'new', loadChildren: () => import('./new/new.module').then((m) => m.NewModule) }]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
