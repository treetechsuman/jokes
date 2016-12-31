import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let jokes = [
      {
        id: 11, 
        title: 'Mr. Nice',
        content:"this is test content",
        like:111,
        disLike:11,
        by:'Akash dahal'
      },
      {
        id: 12, 
        title: 'Mr. second',
        content:"this is second test content",
        like:222,
        disLike:22,
        by:'Eamro dahal'
      },
      {
        id: 13, 
        title: 'Mr. thire',
        content:"this is third test content",
        like:333,
        disLike:33,
        by:'suman dahal'
      },
      
    ];
    return {jokes};
  }
}