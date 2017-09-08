import { ISSUE_LABEL, ISSUE_STATE } from '../actions/issueActions';
import issueReducer from './issueReducer'

describe('issues reducer', () => {
  it('should handle initial state', () => {
    expect(
      issueReducer(undefined, {})
    ).toEqual([])
  });
  
  it('should handle ADD_ISSUE', () => {
    const issue = {
      id: 0,
      assignedId: null,
      label: ISSUE_LABEL.NONE,
      rank: 1,
      state: ISSUE_STATE.BUG,
      title: 'My First Bug',
      description: 'Here is the description'
    };
    expect(
      issueReducer([], {
        type: 'ADD_ISSUE',
        id: issue.id,
        assignedId: issue.assignedId,
        description: issue.description,
        label: issue.label,
        rank: issue.rank,
        state: issue.state,
        title: issue.title
      })
    ).toEqual([
      issue
    ])
  });
});