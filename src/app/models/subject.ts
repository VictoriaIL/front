  import {Test} from './test';

  export class Subject<T> {
    id: number;
    nameSub: string;
    subjectTypeId: number;
    tests: T[];
  }
