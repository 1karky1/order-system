// Toolbar: { header, footer, titleFormat, titleRangeSeparator, buttonText, buttonIcons, customButtons }
// Theme: { themeSystem, bootstrapFontAwesome }
// Sizing: { height, contentHeight, aspectRatio, updateSize(), handleWindowResize, windowResizeDelay,
//           windowResize() }
// Month view: { fixedWeekCount, showNonCurrentDates }
// Time grid view: { allDaySlot, allDayText, slotEventOverlap, timeGridEventMinHeight }
// List view: { listDayFormat, listDayAltFormat, noEventsMessages }
// Custom view: { duration, dayCount, visibleRange }
// View API: { defaultView, view(), changeView(), viewSkeletonRender(), viewSkeletonDestroy(),
//             datesRender(), datesDestroy() }
//     View Object : { type, title, activeStart, activeEnd, currentStart, currentEnd }
// Locale: { locale, dir, firstDay }
// TimeZone { timeZone }
// Date & Time Display: { weekends, hiddenDays, columnHeader, columnHeaderFormat, slotDuration,
//                        slotLabelInterval, slotLabelFormat, minTime, maxTime, scrollTime, dayRender(),
//                        scrollToTime() }
// Date Navigation: { defaultDate, dateIncrement, dateAlignment, validRange,
//                    prev(), next(), prevYear(), nextYear(), today(), gotoDate(), incrementDate(),
//                    getDate() }
// Date clicking and selecting: { selectable, selectMirror, unselectAuto, unselectCancel, selectOverlap,
//                                selectConstraint, selectAllow, selectMinDistance, dateClick(), select(),
//                                unselect() }
// Now indicator: { nowIndicator, now }
// Business hours: { businessHours }
// Event Display: { eventColor, eventBackgroundColor, eventBorderColor, eventTextColor, eventTimeFormat,
//                  displayEventTime, displayEventEnd, nextDayThreshold, eventOrder,
//                  progressiveEventRendering, eventRender(), eventPositioned(), eventDestroy(),
//                  rerenderEvents() }


export const defaultChangeableCalendarConfig = {
    editable: true,
    droppable: true,
    header: false,
    footer: false,
    allDaySlot: false,
    slotEventOverlap: false,
    displayEventEnd: true,
};

export const defaultFixedCalendarConfig = {
    defaultView: "timeGridDay",
    timeZone: 'UTC',
    themeSystem: 'bootstrap',
    height: "auto",
};

