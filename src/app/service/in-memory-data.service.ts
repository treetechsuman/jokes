import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let jokes = [
      {
        id: 11, 
        title: 'Birth Day',
        content:"Every year on my birthday, I looked forward to my aunt’s gift—a scarf, hat, or sweater knitted by hand. One year, she must have had better things to do because I received a ball of yarn, knitting needles, and a how-to-knit book. Her card read Scarf, some assembly required.",
        like:111,
        disLike:11,
        by:'Akash dahal'
      },
      {
        id: 12, 
        title: 'Birth Day',
        content:"Greeting Cards: When you care enough to send the very best but not enough to actually write something.",
        like:222,
        disLike:22,
        by:'Prakash Koirala'
      },
      {
        id: 13, 
        title: 'An Amnesiac Walks Into…',
        content:"An amnesiac walks into a bar. He goes up to a beautiful blonde and says, “So, do I come here often?”",
        like:333,
        disLike:33,
        by:'Prakash Devkota'
      },
      {
        id: 14, 
        title: 'Gimme a White Russian, Hold The Russian.',
        content:"At an all-you-can-eat buffet, my nine-year-old was excited to find a chocolate milk machine. But her aunt did not approve. “Chocolate milk for dinner?” she asked.“It’s delicious!” said my daughter.Her aunt shrugged. “Well, its 8 a.m. somewhere.”",
        like:111,
        disLike:11,
        by:'Surya Pachhai'
      },
      {
        id: 15, 
        title: 'You Look so Familiar…',
        content:"The barman says, “We don’t serve time travelers in here.A time traveler walks into a bar.",
        like:222,
        disLike:22,
        by:'Madhuraman Ghimire'
      },
      {
        id: 16, 
        title: 'A Penguin Walks Into…',
        content:"A penguin walks into a bar, goes to the counter, and asks the bartender, “Have you seen my brother?”The bartender says, “I don’t know. What does he look like?”",
        like:333,
        disLike:33,
        by:'Ram Thapa'
      },
      
    ];
    return {jokes};
  }
  
}