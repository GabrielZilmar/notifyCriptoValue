import scheduler, { JobCallback } from "node-schedule";
import { Timers } from "@/constants/timers";

class CronjobBuilder {
  private name: string;
  private scheduleTime: string = Timers.EVERY_30_SECONDS;

  static new(name: string): CronjobBuilder {
    const instance = new CronjobBuilder();
    instance.setName(name);

    return instance;
  }

  public setName(name: string): CronjobBuilder {
    this.name = name;

    return this;
  }

  public getName(): string {
    return this.name;
  }

  public setScheduleTime(scheduleTime: string): CronjobBuilder {
    this.scheduleTime = scheduleTime;

    return this;
  }

  public getScheduleTime(): string {
    return this.scheduleTime;
  }

  public async register(handler: JobCallback): Promise<void> {
    scheduler.scheduleJob(this.name, this.scheduleTime, handler);
  }
}

export default CronjobBuilder;
