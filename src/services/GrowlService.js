const Growl = {
  success(msg, time) {
    $.growl.notice({ title: 'Qualifica Web', message: msg, duration: time, location: 'tr', size: 'large', delayOnHover: true });
  },

  error(msg, time) {
    $.growl.error({ title: 'Qualifica Web', message: msg, duration: time, location: 'tr', size: 'large', delayOnHover: true });
  },

  warning(msg, time) {
    $.growl.warning({ title: 'Qualifica Web', message: msg, duration: time, location: 'tr', size: 'large', delayOnHover: true });
  },

  default(msg, time) {
    $.growl({ title: 'Qualifica Web', message: msg, duration: time, location: 'tr', size: 'large', delayOnHover: true });
  }
}
export default Growl;
