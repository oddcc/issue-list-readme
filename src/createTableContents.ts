import table from 'markdown-table';
import * as core from '@actions/core';

const createTableContents = async (issues: any) => {
  try {
    const markDownText: string = table(
      issues.data.map(
        (item: { title: any; state: string; assignees: any[] }) => ({
          title: item.title,
          status: item.state === 'open' ? ':heavy_check_mark:' : ':no_entry:',
          assignee: item.assignees.map(
            (assignee: { avatar_url: any }) => assignee.avatar_url
          )
        })
      )
    );

    console.log(markDownText);

    return markDownText;
  } catch (error) {
    core.setFailed(error.message);
    throw error.message;
  }
};
export default createTableContents;