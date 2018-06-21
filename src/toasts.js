import { toast } from 'react-toastify';
import { css } from 'glamor';

export default {
  // Keep the signature of the original toast object
  // Doing so you can pass additionnal options
  success(msg, options = {}) {
    return toast.success(msg, {
      // Merge additionals options
      ...options,
      className: css({
        color: '#343a40',
        minHeight: '60px',
        borderRadius: '8px',
        background: '#2FEDAD',
        boxShadow: '2px 2px 20px 2px rgba(0,0,0,0.3)'
      }),
      bodyClassName: css({
        fontSize: '60px'
      }),
      progressClassName: css({
        background: "repeating-radial-gradient(circle at center, red 0, blue, green 30px)"
      })
    });
  },
  
  dismiss(msg,options={}){
      return toast.dismiss();
  },

  error(msg, options = {}) {
    return toast.error(msg, {
      ...options,
      className: {
        minHeight: '60px',
        borderRadius: '8px',
        boxShadow: '2px 2px 20px 2px rgba(0,0,0,0.3)'
      }
    });
  }
};
