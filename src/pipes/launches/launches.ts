import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the LaunchesPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'launchesPipe',
})
export class LaunchesPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.toLowerCase();
  }
}
