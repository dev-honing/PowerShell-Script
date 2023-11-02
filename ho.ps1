# 학생과 저장소 맵핑
$studentRepoMap = @{
  "1" = 'https://github.com/KDT-IaaS-Class-One-Group/Code-Talk.git';
  "2" = 'https://github.com/KDT-IaaS-Class-One-Group/Cat-Toy.git';
  "3" = 'https://github.com/KDT-IaaS-Class-One-Group/Comments.git';
  "4" = 'https://github.com/KDT-IaaS-Class-One-Group/bingmok.git';
  "5" = 'https://github.com/KDT-IaaS-Class-One-Group/random-map.git';
  "6" = 'https://github.com/KDT-IaaS-Class-One-Group/pokemonbag.git';
  "7" = 'https://github.com/KDT-IaaS-Class-One-Group/humanAPI.git';
  "8" = 'https://github.com/KDT-IaaS-Class-One-Group/weatherAPI.git';

}

# * 디렉토리 해당하는 실행줄 동일하게 설정

$targetDirectory = "C:\Users\Administrator\Desktop\Ho\PowerShell-Script\Code-Review"

Function CloneOrUpdateRepo ($student, $repoUrl, $destFolder) {
  $destFolder = Join-Path $destFolder ("$student-" + (Split-Path $repoUrl -Leaf).Replace(".git", ""))
  if (Test-Path $destFolder) {
      Write-Host "Updating $destFolder"
      Set-Location -Path $destFolder
      git pull
      git fetch --all
  }
  else {
      Write-Host "Cloning $repoUrl to $destFolder"
      git clone $repoUrl $destFolder
  }
}

foreach ($entry in $studentRepoMap.GetEnumerator()) {
  $destFolder = $targetDirectory
  CloneOrUpdateRepo $entry.Name $entry.Value $destFolder
}