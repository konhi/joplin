joplin.plugins.register({
	onStart: async function() {
		joplin.workspace.onNoteAlarmTrigger(async (event:any) => {
			const note = await joplin.data.get('notes/' + event.noteId);
			console.info('Alarm was triggered for note: ', note);
		});

		joplin.workspace.onSyncComplete(async () => {
			console.info('Sync has completed');
		});
	},
});