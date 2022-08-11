# Send Slack Message

This is a GitHub action to send a Slack message using a Slack bot token.

## Set up

See https://api.slack.com/bot-users for information on setting up and installing a Slack Bot.

## Inputs

- `message`: The Slack message to send

- `slack-token`: The Slack bot user access token

- `channel`: The Slack channel ID to send the message to

- `mrkdwn` : (optional) Determines whether the text field is rendered according to mrkdwn formatting or not. Defaults to true.

## Example Usage


```yaml
      - name: Post message
        uses: joshmgross/send-slack-message@main
        with:
          message: 'Hello world'
          channel: ${{ secrets.SLACK_CHANNEL_ID }}
          slack-token: ${{ secrets.SLACK_BOT_TOKEN }}
```
