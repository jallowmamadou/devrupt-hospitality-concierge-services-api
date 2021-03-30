import * as dotenv from 'dotenv';
import express from 'express';
import compression from 'compression'; // compresses requests
import * as reservationsController from './controllers/reservations';
import * as reservation from './controllers/properties';
import * as qrcode from './controllers/qrcode';
import * as ui from './controllers/ui';
import { install } from './controllers/installation';
import { publish } from './controllers/notication';
import * as webhook from './controllers/webhook-controller';
import * as voice from './controllers/twilio-controller';

dotenv.config();

var cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.raw());
app.use(express.text());
app.use(express.urlencoded());

app.set('port', process.env.PORT || 3000);
app.use(compression());
// Routes
app.get('/', (req, res) => {
  res.json({ status: 'ready to go' });
});

app.get('/api/reservations/:id', reservationsController.getReservationById);
app.get('/api/reservations/:id/folios', reservationsController.folios);
app.post('/api/reservations/:id/checkout', reservationsController.checkout);
app.get('/api/properties/:id', reservation.findById);
app.get('/api/properties/:id/exists', reservation.exists);
app.post('/api/qrcode', qrcode.generateCode);
app.post('/api/integrations', ui.integration);
app.post('/api/install', install);
app.post('/api/notifications/publish', publish);
app.post('/api/webhooks/setup', webhook.setup);
app.post('/api/webhooks/incoming', webhook.incoming);
app.post('/api/voice/token', voice.getToken);
app.post('/api/voice/incoming', voice.incoming);
export default app;
