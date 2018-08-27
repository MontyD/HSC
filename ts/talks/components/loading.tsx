import * as React from 'react';

export const Loading = ({entityName = ''}: {entityName: string}) => <div className="loading">Loading {entityName}</div>;