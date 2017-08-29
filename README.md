# Speaking Clock Kata
====================================

(this description of the kata was copied from https://github.com/spacebaboon/speaking-clock)

Your company is writing the firmware for an alarm clock which will speak the time, so it can be used in the night and for people with visual disabilities.  
The hardware contains a speech synthesiser, which will read out textual input. 
You have been asked to write the software to convert a system time into the full text in English, as in the examples below.


|System Time	|English|
|-------|---------|
|00:00	|	midnight|
|08:34	|	eight thirty four in the morning|
|12:00	|	midday|
|15:04	|	three oh four in the afternoon|
|21:00	|	nine o'clock in the evening|


## Requirements

You should use [NodeJS v8](https://nodejs.org/en/download/) or above.

Install assignment dependencies:

```bash
$ npm install
```

## Making the test suite pass

Run Jest in watch mode, with coverage info like this:

```bash
$ npm run watch:cover
```

In the test suite all tests but the first have been skipped.

Once you get a test passing, you can enable the next one by
changing `xtest` to `test`.
