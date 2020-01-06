import { VoteComponent } from './vote.component';

// VoteComponent is the system under test
describe('VoteComponent', () => {
  let component: VoteComponent; // type is VoteComponent so that we can have intellisense throughout this module

  beforeEach(() => {
    // The actual initialisation here;
    component = new VoteComponent();
  });

  it('should increment totalVotes when upvoted', () => {
    component.upVote();

    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvotes', () => {

    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});
