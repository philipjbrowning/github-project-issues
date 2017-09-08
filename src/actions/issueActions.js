export const ADD_ISSUE = 'ADD_ISSUE';
export const ISSUE_LABEL = {
  NONE: 0,
  BUG: 1,
  DUPLICATE: 2,
  ENHANCEMENT: 3,
  INVALID: 4,
  QUESTION: 5,
  WONT_FIX: 6
};
export const ISSUE_STATE = {
  OPEN: 0,
  BACKLOG: 1,
  IN_PROGRESS: 2,
  RESOLVED: 3,
  CLOSED: 4
};
export const REMOVE_ISSUE = 'REMOVE_ISSUE';
export const RESOLVE_ISSUE = 'RESOLVE_ISSUE';
export const UPDATE_ISSUE = 'UPDATE_ISSUE';
export const VIEW_ISSUE = 'VIEW_ISSUE';

let nextIssueId = 0;
export const addIssue = (issue) => ({
  type: ADD_ISSUE,
  assignedId: issue.assignedId || null,
  description: issue.description || '',
  id: nextIssueId++,
  label: issue.label || ISSUE_LABEL.NONE,
  rank: issue.rank || nextIssueId,
  title: issue.title || ''
});

export const removeIssue = (id) => ({
  type: REMOVE_ISSUE,
  id
});

export const resolveIssue = (id) => ({
  type: RESOLVE_ISSUE,
  id
});

export const updateIssue = (issue) => ({
  type: UPDATE_ISSUE,
  issue
});

export const viewIssue = (issue) => ({
  type: VIEW_ISSUE,
  issue
});