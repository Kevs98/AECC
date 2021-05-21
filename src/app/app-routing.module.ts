import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./pages/homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'inventario',
    loadChildren: () => import('./pages/inventario/inventario.module').then( m => m.InventarioPageModule)
  },
  {
    path: 'cierre',
    loadChildren: () => import('./pages/cierre/cierre.module').then( m => m.CierrePageModule)
  },
  {
    path: 'socios',
    loadChildren: () => import('./pages/socios/socios.module').then( m => m.SociosPageModule)
  },
  {
    path: 'nuevacaja',
    loadChildren: () => import('./pages/nuevacaja/nuevacaja.module').then( m => m.NuevacajaPageModule)
  },
  {
    path: 'itemdetails/:id',
    loadChildren: () => import('./pages/itemdetails/itemdetails.module').then( m => m.ItemdetailsPageModule)
  },
  {
    path: 'partnerdetail/:id',
    loadChildren: () => import('./pages/partnerdetail/partnerdetail.module').then( m => m.PartnerdetailPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./pages/clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'addcliente',
    loadChildren: () => import('./pages/addcliente/addcliente.module').then( m => m.AddclientePageModule)
  },
  {
    path: 'additemtoclient/:id',
    loadChildren: () => import('./pages/additemtoclient/additemtoclient.module').then( m => m.AdditemtoclientPageModule)
  },
  {
    path: 'clientdetail/:id',
    loadChildren: () => import('./pages/clientdetail/clientdetail.module').then( m => m.ClientdetailPageModule)
  },
  {
    path: 'clienthistory/:id/:tipo',
    loadChildren: () => import('./pages/clienthistory/clienthistory.module').then( m => m.ClienthistoryPageModule)
  },
  {
    path: 'historydetail/:id/:tipo',
    loadChildren: () => import('./pages/historydetail/historydetail.module').then( m => m.HistorydetailPageModule)
  },
  {
    path: 'availableclose/:id',
    loadChildren: () => import('./pages/availableclose/availableclose.module').then( m => m.AvailableclosePageModule)
  },
  {
    path: 'closebox/:id',
    loadChildren: () => import('./pages/closebox/closebox.module').then( m => m.CloseboxPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
