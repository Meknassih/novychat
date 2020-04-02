import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', component: RegisterComponent }, // TODO: Route '' to main component and use directive CanActivate
  { path:'chat', component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
