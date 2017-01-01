import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryUserDataService implements InMemoryDbService {
  createDb() {
    let users = [
      {
        id: 11, 
        fullName: 'Suman Dahal',
        email:"me.suman11@gmail.com",
        password:'sumandahal',
        status:true
      },            
    ];
    return {users};
  }
  
}