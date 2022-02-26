<template>
  <solution-with-overlay class="active">
    <template v-slot:exercise>
      Arbeiten Sie das Tutorial <a
        href="https://code.tutsplus.com/tutorials/create-a-wysiwyg-editor-with-the-contenteditable-attribute--cms-25657"
        target="_blank">Create a WYSIWYG Editor With the contentEditable Attribute</a> durch und erstellen Sie Ihren
      eigenen HTML-Editor.
    </template>
    <template v-slot:solution>
      <div class="container">
        <div class="toolbar">
          <a href="#" data-command='undo'><font-awesome-icon icon='fa fa-undo'></font-awesome-icon></a>
          <a href="#" data-command='redo'><font-awesome-icon icon='fa fa-repeat'></font-awesome-icon></a>
          <div class="fore-wrapper"><font-awesome-icon icon='fa fa-font' style='color:#C96;'></font-awesome-icon>
            <div class="fore-palette">
              <a href="#" data-command="forecolor" data-value="#000000" style="background-color:#000000;" class="palette-item"></a>
              <a href="#" data-command="forecolor" data-value="#FF9966" style="background-color:#FF9966;" class="palette-item"></a>
              <a href="#" data-command="forecolor" data-value="#6699FF" style="background-color:#6699FF;" class="palette-item"></a>
              <a href="#" data-command="forecolor" data-value="#99FF66" style="background-color:#99FF66;" class="palette-item"></a>
              <a href="#" data-command="forecolor" data-value="#CC0000" style="background-color:#CC0000;" class="palette-item"></a>
              <a href="#" data-command="forecolor" data-value="#00CC00" style="background-color:#00CC00;" class="palette-item"></a>
              <a href="#" data-command="forecolor" data-value="#0000CC" style="background-color:#0000CC;" class="palette-item"></a>
              <a href="#" data-command="forecolor" data-value="#333333" style="background-color:#333333;" class="palette-item"></a>
              <a href="#" data-command="forecolor" data-value="#0066FF" style="background-color:#0066FF;" class="palette-item"></a>
              <a href="#" data-command="forecolor" data-value="#FFFFFF" style="background-color:#FFFFFF;" class="palette-item"></a>
            </div>
          </div>
          <div class="back-wrapper"><font-awesome-icon icon='fa fa-font' style='background:#C96;'></font-awesome-icon>
            <div class="back-palette">
              <a href="#" data-command="backcolor" data-value="#000000" style="background-color:#000000;" class="palette-item"></a>
              <a href="#" data-command="backcolor" data-value="#FF9966" style="background-color:#FF9966;" class="palette-item"></a>
              <a href="#" data-command="backcolor" data-value="#6699FF" style="background-color:#6699FF;" class="palette-item"></a>
              <a href="#" data-command="backcolor" data-value="#99FF66" style="background-color:#99FF66;" class="palette-item"></a>
              <a href="#" data-command="backcolor" data-value="#CC0000" style="background-color:#CC0000;" class="palette-item"></a>
              <a href="#" data-command="backcolor" data-value="#00CC00" style="background-color:#00CC00;" class="palette-item"></a>
              <a href="#" data-command="backcolor" data-value="#0000CC" style="background-color:#0000CC;" class="palette-item"></a>
              <a href="#" data-command="backcolor" data-value="#333333" style="background-color:#333333;" class="palette-item"></a>
              <a href="#" data-command="backcolor" data-value="#0066FF" style="background-color:#0066FF;" class="palette-item"></a>
              <a href="#" data-command="backcolor" data-value="#FFFFFF" style="background-color:#FFFFFF;" class="palette-item"></a>
            </div>
          </div>
          <a href="#" data-command='bold'><font-awesome-icon icon='fa fa-bold'></font-awesome-icon></a>
          <a href="#" data-command='italic'><font-awesome-icon icon='fa fa-italic'></font-awesome-icon></a>
          <a href="#" data-command='underline'><font-awesome-icon icon='fa fa-underline'></font-awesome-icon></a>
          <a href="#" data-command='strikeThrough'><font-awesome-icon icon='fa fa-strikethrough'></font-awesome-icon></a>
          <a href="#" data-command='justifyLeft'><font-awesome-icon icon='fa fa-align-left'></font-awesome-icon></a>
          <a href="#" data-command='justifyCenter'><font-awesome-icon icon='fa fa-align-center'></font-awesome-icon></a>
          <a href="#" data-command='justifyRight'><font-awesome-icon icon='fa fa-align-right'></font-awesome-icon></a>
          <a href="#" data-command='justifyFull'><font-awesome-icon icon='fa fa-align-justify'></font-awesome-icon></a>
          <a href="#" data-command='indent'><font-awesome-icon icon='fa fa-indent'></font-awesome-icon></a>
          <a href="#" data-command='outdent'><font-awesome-icon icon='fa fa-outdent'></font-awesome-icon></a>
          <a href="#" data-command='insertUnorderedList'><font-awesome-icon icon='fa fa-list-ul'></font-awesome-icon></a>
          <a href="#" data-command='insertOrderedList'><font-awesome-icon icon='fa fa-list-ol'></font-awesome-icon></a>
          <a href="#" data-command='h1'>H1</a>
          <a href="#" data-command='h2'>H2</a>
          <a href="#" data-command='createlink'><font-awesome-icon icon='fa fa-link'></font-awesome-icon></a>
          <a href="#" data-command='unlink'><font-awesome-icon icon='fa fa-unlink'></font-awesome-icon></a>
          <a href="#" data-command='insertimage'><font-awesome-icon icon='fa fa-image'></font-awesome-icon></a>
          <a href="#" data-command='p'>P</a>
          <a href="#" data-command='subscript'><font-awesome-icon icon='fa fa-subscript'></font-awesome-icon></a>
          <a href="#" data-command='superscript'><font-awesome-icon icon='fa fa-superscript'></font-awesome-icon></a>
        </div>
        <div id='editor' contenteditable>
          <h1>A WYSIWYG Editor.</h1>
          <p>Try making some changes here. Add your own text or maybe an image.</p>
        </div>
      </div>
    </template>
  </solution-with-overlay>
</template>

<script>
import SolutionWithOverlay from "@/components/SolutionWithOverlay";
import $ from "jquery";

export default {
  name: "Woche04Aufgabe4",
  title: 'Web Engineering WS21/22 - Woche 4.4',
  components: {
    SolutionWithOverlay
  },
  data() {
    return {
      url: undefined,
    }
  },
  mounted() {
    $('.toolbar a').click(function () {
      var command = $(this).data('command');
      if (command === 'h1' || command === 'h2' || command === 'p') {
        document.execCommand('formatBlock', false, command);
      }
      if (command === 'forecolor' || command === 'backcolor') {
        document.execCommand($(this).data('command'), false, $(this).data('value'));
      }
      if (command === 'createlink' || command === 'insertimage') {
        this.url = prompt('Enter the link here: ', 'http://');
        document.execCommand($(this).data('command'), false, this.url);
      } else document.execCommand($(this).data('command'), false, null);
    })
  },
}
</script>

<style scoped>
.container {
  height: calc(100vh - 61px - 40px);
  width: calc(100vw);
  transition: 0.5s linear;
}

.active .container {
  height: calc(100vh - 40px);
  width: calc(100vw - 378px);
}

body {
  margin: 0 auto;
  width: 600px;
  font-family: 'Dosis';
}

a {
  cursor: pointer;
}

#editor {
  box-shadow: 0 0 2px #CCC;
  min-height: 150px;
  overflow: auto;
  padding: 1em;
  margin: 20px;
  resize: vertical;
  outline: none;
}

.toolbar {
  text-align: center;
}

.toolbar a,
.fore-wrapper,
.back-wrapper {
  border: 1px solid #AAA;
  background: #FFF;
  font-family: 'Candal';
  border-radius: 1px;
  color: black;
  padding: 5px;
  width: 1.5em;
  margin: -2px;
  margin-top: 10px;
  display: inline-block;
  text-decoration: none;
  box-shadow: 0 1px 0 #CCC;
}

.toolbar a:hover,
.fore-wrapper:hover,
.back-wrapper:hover {
  background: #f2f2f2;
  border-color: #8c8c8c;
}

a[data-command='redo'],
a[data-command='strikeThrough'],
a[data-command='justifyFull'],
a[data-command='insertOrderedList'],
a[data-command='outdent'],
a[data-command='p'],
a[data-command='superscript'] {
  margin-right: 5px;
  border-radius: 0 3px 3px 0;
}

a[data-command='undo'],
.fore-wrapper,
a[data-command='justifyLeft'],
a[data-command='insertUnorderedList'],
a[data-command='indent'],
a[data-command='h1'],
a[data-command='subscript'] {
  border-radius: 3px 0 0 3px;
}

a.palette-item {
  height: 1em;
  border-radius: 3px;
  margin: 2px;
  width: 1em;
  border: 1px solid #CCC;
}

a.palette-item:hover {
  border: 1px solid #CCC;
  box-shadow: 0 0 3px #333;
}

.fore-palette,
.back-palette {
  display: none;
}

.fore-wrapper,
.back-wrapper {
  display: inline-block;
  cursor: pointer;
}

.fore-wrapper:hover .fore-palette,
.back-wrapper:hover .back-palette {
  display: block;
  float: left;
  position: absolute;
  padding: 3px;
  width: 160px;
  background: #FFF;
  border: 1px solid #DDD;
  box-shadow: 0 0 5px #CCC;
  height: 70px;
}

.fore-palette a,
.back-palette a {
  background: #FFF;
  margin-bottom: 2px;
}
</style>