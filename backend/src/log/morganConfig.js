const morgan = require('morgan')
const moment = require('moment-timezone');

module.exports = {
  morgan: (app) => {
    //app.use(morgan('combined'))
    morgan.token('date', (req, res, tz) => {
      return moment().tz(tz).format('DD/MM/YYYY HH:mm:ss');
    })
    morgan.format('myformat', '[:date[America/Sao_Paulo]] :remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms ');
    app.use(morgan('myformat'));
  },
}