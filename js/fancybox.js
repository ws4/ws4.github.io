$.fancybox.defaults.buttons = ["zoom", "download", "thumbs", "close"];
$(document).ready(function() {
  $('img').each(function() {
    if ($(this).parent().hasClass('fancybox')) return;
    if ($(this).hasClass('nofancybox')) return;
	/* if ($(this).parent().hasAttr('data-fancybox')=='gallery') return; */
    var alt = this.alt;
	if (alt) $(this).after('<span class="caption">' + alt + '</span>');
    $(this).wrap('<a data-fancybox="gallery" no-pjax="" data-type="image" data-caption="' + alt + '" href="' + ($(this).attr('data-src') == null ? this.src : $(this).attr('data-src')) + '" class="light-link"></a>');
  });
});