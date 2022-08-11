import { WebClient } from '@slack/web-api';
import * as core from "@actions/core";

async function run(): Promise<void> {
    try {
        // Inputs and validation
        const slackToken = core.getInput("slack-token", { required: true });
        const channel = core.getInput("channel", { required: true });
        const message = core.getInput("message", { required: true });
        const markdown = core.getInput("mrkdwn", {required: false });

        // Send slack message
        const slackWebClient =  new WebClient(slackToken);
        const result = await slackWebClient.chat.postMessage({
          text: message,
          channel: channel,
          mrkdwn: markdown ?? false
        });

        if (result.ok) {
          core.info('Slack message sent 🚀')
        } else {
          core.setFailed(`❌ Unable to send Slack message: ${result.error}`);
        }

    } catch (error) {
      core.setFailed(`❌ Action failed with error: ${error}`)
    }
}

run();
