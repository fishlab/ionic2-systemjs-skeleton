/// <reference path="../typings/index.d.ts" />
import { GreetService} from "../app/services/greet";

import { beforeEachProviders, inject} from '@angular/core/testing'; 

describe("The 'toBe' matcher compares with ===", () => {
    it("and has a positive case ", () => {
        expect(true).toBe(true);
    });
    it("and can have a negative case", () => {
        expect(false).not.toBe(true);
    });
});


describe('Service: GreetService', () => {
    beforeEachProviders(() => [GreetService]);

    it('should say hello to world', inject([GreetService], (service) => {
        expect(service.greet('world')).toBe('hello,world');
    }));
})