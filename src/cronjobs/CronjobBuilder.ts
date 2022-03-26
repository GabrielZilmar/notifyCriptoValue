import scheduler, { JobCallback } from "node-schedule";

export class CronjobBuilder {
  private name: string;
  private scheduleTime: string = "* 2 * * *  *";

  static new(name: string): CronjobBuilder {
    const instance = new CronjobBuilder();
    instance.setName(name);

    return instance;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setScheduleTime(scheduleTime: string): void {
    this.scheduleTime = scheduleTime;
  }

  public getScheduleTime(): string {
    return this.scheduleTime;
  }

  public async register(handler: JobCallback): Promise<void> {
    scheduler.scheduleJob(this.name, this.scheduleTime, handler);
  }
}
