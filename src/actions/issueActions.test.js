import * as issues from './issueActions'

describe('issueActions', () => {
  it('addIssue should create an ADD_ISSUE action', () => {
    expect(issues.addIssue({title: 'New GitHub Issue'})).toEqual({
      type: 'ADD_ISSUE',
      assignedId: null,
      description: '',
      id: 0,
      label: issues.ISSUE_LABEL.NONE,
      rank: 1,
      title: 'New GitHub Issue'
    });
  });
  
  it('removeIssue should create a REMOVE_ISSUE action', () => {
    expect(issues.removeIssue(1)).toEqual({
      type: 'REMOVE_ISSUE',
      id: 1
    });
  });
  
  it('resolveIssue should create a RESOLVE_ISSUE action', () => {
    expect(issues.resolveIssue(3)).toEqual({
      type: 'RESOLVE_ISSUE',
      id: 3
    });
  });
  
  it('updateIssue should create an UPDATE_ISSUE action', () => {
    const issue = {
      assignedId: null,
      description: 'Description',
      id: 4,
      label: issues.ISSUE_LABEL.BUG,
      rank: 1,
      title: 'Existing GitHub Issue'
    };
    expect(issues.updateIssue(issue)).toEqual({
      type: 'UPDATE_ISSUE',
      issue: issue
    });
  });
});