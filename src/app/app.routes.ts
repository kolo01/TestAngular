import { Routes } from '@angular/router';
import { DashboardComponent } from './presentations/owner/dashboard/dashboard.component';
import { AskingComponent } from './presentations/owner/asking/asking.component';
import { ApplyComponent } from './presentations/owner/apply/apply.component';
import { DocumentComponent } from './presentations/owner/document/document.component';
import { PropertyComponent } from './presentations/owner/property/property.component';
import { HomeComponent } from './presentations/client/home/home.component';
import { DetailsComponent } from './presentations/client/details/details.component';
import { AllPropertiesComponent } from './presentations/client/all-properties/all-properties.component';
import { LoginComponent } from './presentations/login/login.component';
import { RegisterComponent } from './presentations/register/register.component';
import { ConntactComponent } from './presentations/conntact/conntact.component';
import { ChatComponent } from './presentations/chat/chat.component';
import { AboutComponent } from './presentations/about/about.component';

export const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent },
  {path: 'demande', component: AskingComponent },
  {path: 'candidature', component: ApplyComponent },
  {path: 'documents', component: DocumentComponent },
  {path: 'propriete', component: PropertyComponent },
  // {path: 'propriete', component: PropertyComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'contact', component: ConntactComponent },
  {path: 'chat', component: ChatComponent },
  {path: 'about', component: AboutComponent },
  {path: '', component: HomeComponent },
  {path: 'details', component: DetailsComponent },
  {path: 'all_properties', component: AllPropertiesComponent },

  {path: '**', component: LoginComponent}
];
