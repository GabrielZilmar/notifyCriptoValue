import glob from "glob";

class Cronjob {
  private async setup(): Promise<void> {
    const jobsFiles = "../../cronjobs/jobs/*.ts";

    const jobs = glob.sync(jobsFiles, { cwd: __dirname, root: __dirname });
    jobs.forEach(async (cronjob) => {
      await import(cronjob);
    });
  }

  async start(): Promise<void> {
    await this.setup();
  }
}

export default Cronjob;
