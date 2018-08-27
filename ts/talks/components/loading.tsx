import * as React from 'react';

export const Loading = ({entityName = ''}: {entityName: string}) => <div className="talks-loading">Loading {entityName}</div>;