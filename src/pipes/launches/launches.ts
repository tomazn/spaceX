import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the LaunchesPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'LaunchesPipe',
})
export class LaunchesPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any, selectedSuccessLaunch: string, selectedRocketsFilter: string, selectedLaunchDateFilter: string) {

    if((!selectedSuccessLaunch || selectedSuccessLaunch == "all") && (!selectedRocketsFilter || selectedRocketsFilter == "all") && (!selectedLaunchDateFilter || selectedLaunchDateFilter == "all")){
      return value;
    }


    let filteredLaunches: any[] = [];
    
    let successValidation;
    let rocketValidation;
    let dateValidation;

    for(let launch of value){

      successValidation = false;
      rocketValidation = false;
      dateValidation = false;

      //Validation for success launch
      if(selectedSuccessLaunch == "all"){
        successValidation = true;
      }else if(launch.launch_success.toString() == selectedSuccessLaunch){
        successValidation = true;
      }

      //Validation for rocket 
      if(selectedRocketsFilter == "all"){
        rocketValidation = true;
      }else if(launch.rocket.rocket_name == selectedRocketsFilter){
        rocketValidation = true;
      }

      //Validation for date 
      if(selectedLaunchDateFilter == "all"){
        dateValidation = true;
      }else if(launch.launch_year == selectedLaunchDateFilter){
        dateValidation = true;
      }

      if(successValidation && rocketValidation && dateValidation){
        filteredLaunches.push(launch);
      }
    }

    console.log(filteredLaunches);
    return filteredLaunches;
  }
}
