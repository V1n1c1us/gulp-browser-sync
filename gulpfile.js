const gulp = require('gulp'),
	browserSync = require('browser-sync').create();
	csslint = require('gulp-csslint')

gulp.task('default', () => {
	browserSync.init({
		server: './'
	});
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('css/*.css').on('change', browserSync.reload);
})
/*
gulp.task('csslint', function(){
	gulp.src('css/*.css')
		.pipe(csslint())
		.pipe(csslint.formatter());
});


	
//definição das tarefas ('nomeDaTarefa', ''Tarefas que queremos que se execute antes que execute está
/*gulp.task('default' () => 

	//rota de origem
	gulp.src('./origem'); 
		.pipe(plugin1)
		.pipe(plugin2)
		.pipe(plugin3)
		.pipe(gulp.dest('./origem')) // <- ./destino
	//rota de destino
	gulp.dest('./'); 
); 

gulp.task('defautl', () = {
	gulp.watch('./origem', ['myTask']);
})
**/

// supervisa um diretório constantemente e executa uma tarefa quando estiver uma ação definida
// ('local',[array de tarefa])
//gulp.watch('./origem', ['myTask']);