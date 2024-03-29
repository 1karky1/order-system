import moment from 'moment';

export const minutesToHourMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60).toString();
    const minutes = (totalMinutes % 60).toString();
    return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
};

export const datesToDuration = (startDate, endDate) => {
    return moment.duration(endDate - startDate).asMinutes();
};