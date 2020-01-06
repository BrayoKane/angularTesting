import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import {empty, from, throwError} from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  xit('should set todos property with items returned from the server', () => {
    const todos = [1, 2, 3];

    spyOn(service, 'getTodos').and.callFake(() => {
      return from([ todos ]);
    });

    component.ngOnInit();

    expect(component.todos.length).toBe(3);
  });


  it('should call the server to save the changes when a new todo item is added', () => {
    let spy = spyOn(service, 'getTodos').and.callFake(() => {
      return empty(); // we don't care what's been returned from the server. We just want to ensure the add method of our service is called
    });

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });


  it('should add the new todo from the server', () => {
    let todo = {id: 1};
    let spy = spyOn(service, 'add').and.returnValue(from([ todo ]));

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('should set the message property if server returns an error when adding a new todo ', () => {
    let error = 'error from the server';
    let spy = spyOn(service, 'add').and.returnValue(throwError(error));

    component.add();

    expect(component.message).toBe(error);
  });

  it('should call the server to delete a todo item if the user confirms ', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(empty());

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);
  });
});
