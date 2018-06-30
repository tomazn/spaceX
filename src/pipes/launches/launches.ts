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

console.log(selectedSuccessLaunch);
console.log(selectedRocketsFilter);
console.log(selectedLaunchDateFilter);

    if((!selectedSuccessLaunch || selectedSuccessLaunch == "all") && (!selectedRocketsFilter || selectedRocketsFilter == "all") && (!selectedLaunchDateFilter || selectedLaunchDateFilter == "all")){
      return value;
    } 
  }
}
