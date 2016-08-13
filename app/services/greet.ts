import { Injectable } from "@angular/core"
@Injectable()
export class GreetService {
    greet(who: string) {
        return 'hello,' + who;
    }
}
