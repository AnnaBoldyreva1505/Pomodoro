const WORK_TIME = 1;
const BREAK_TIME = 2;
const RELAX_TIME = 1;

export const state = {
    work: WORK_TIME,
    break: BREAK_TIME,
    relax: RELAX_TIME,
    status: "work",
    timeLeft: WORK_TIME * 60,
    isActive: false,
    timerId: 0,
    count: 4,
}