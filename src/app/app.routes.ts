import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './modules/history/history-component/history-component.component';
import { HomeComponent } from './modules/home/home/home.component';

export const routes: Routes = [
    {path: 'history', component: HistoryComponent  },
    {path: 'home', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}