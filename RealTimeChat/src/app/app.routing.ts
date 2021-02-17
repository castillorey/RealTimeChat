import { Routes, RouterModule } from '@angular/router';
import { V1Component } from './modules/v1/pages/v1/v1.component';
import { V2Component } from './modules/v2/pages/v2/v2.component';

const routes: Routes = [
  {  
    path: "",
    redirectTo: "v1",
    pathMatch: "full"
  },
  {
    path:"v1",
    component: V1Component,
    data: {title: "ChatV1"}
  },
  {
    path:"v2",
    component: V2Component,
    data: {title: "ChatV2"}
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
