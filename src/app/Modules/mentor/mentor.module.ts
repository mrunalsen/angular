import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MentorFormContainerComponent } from './mentor-form-container/mentor-form-container.component';
import { MentorFormPresentationComponent } from './mentor-form-container/mentor-form-presentation/mentor-form-presentation.component';
import { MentorListContainerComponent } from './mentor-list-container/mentor-list-container.component';
import { MentorListPresentationComponent } from './mentor-list-container/mentor-list-presentation/mentor-list-presentation.component';
import { MentorRoutingModule } from './mentor-routing.module';
import { MentorComponent } from './mentor.component';
import { MentorService } from './mentor.service';
import { FilterPresentationComponent } from './mentor-list-container/mentor-list-presentation/filter-presentation/filter-presentation.component';



@NgModule({
  declarations: [
    MentorComponent,
    MentorListContainerComponent,
    MentorFormContainerComponent,
    MentorListPresentationComponent,
    MentorFormPresentationComponent,
    FilterPresentationComponent,
  ],
  imports: [
    CommonModule,
    MentorRoutingModule,
    SharedModule
  ],
  providers: [
    MentorService
  ]
})
export class MentorModule { }
