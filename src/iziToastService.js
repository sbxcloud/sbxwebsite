import iziToast from 'izitoast';

export default function toast(type, options) {
  if (type !== 'info' && type !== 'success' && type !== 'warning' && type !== 'error'
      && type !== 'question' && type !== 'show') {
    console.log('Invalid iziToast alert type');
  } else {
    options.displayMode = 'replace';
    if (!options.position) {
      options.position = 'bottomLeft';
    }
    iziToast[type](options);
  }
};
