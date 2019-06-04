import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export default class UtilsHelperService {
  static formSubmitObserver(e) {
    return {
      next: (counter, emittor) => {
        counter++;
        emittor.emit(counter);
      },
      error: err => console.log('ERROR: ', err),
      complete: () => console.log('complete')
    }
  }
}
