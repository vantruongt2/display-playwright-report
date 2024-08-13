import * as core from "@actions/core";

async function run(): Promise<void> {
  try {
    const reportFile = core.getInput("report-file", { required: true });
    core.info(`Report file: ${reportFile}`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    core.setFailed(message);
  }
}

run();
