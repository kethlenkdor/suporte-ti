    // Base inicial de documentos da biblioteca, usada como conteúdo padrão da aplicação.
    const initialDocuments = [
      { id: "triagem", title: "Primeiro atendimento: checklist de triagem", category: "Procedimento", summary: "Roteiro inicial para entender a solicitação, registrar evidências e encaminhar o chamado corretamente.", owner: "Central de suporte", updated: "2026-09-22", read: "5 min", featured: true, steps: ["Confirme a identidade do solicitante pelos canais oficiais antes de acessar qualquer conta ou equipamento.", "Registre impacto, urgência, horário de início e quantidade de pessoas afetadas no chamado.", "Colete mensagem de erro, sistema operacional, rede utilizada e ações realizadas antes da falha.", "Classifique o chamado por serviço e prioridade conforme a matriz interna de atendimento.", "Encaminhe para a equipe responsável e informe ao usuário o número do chamado e o próximo retorno previsto."], warning: "Nunca solicite ou registre senhas, códigos de autenticação ou tokens no chamado." },
      { id: "cartilha", title: "Cartilha de Boas Práticas de Segurança Digital no Suporte Técnico", category: "Segurança", summary: "Baseada na LGPD, ITIL 4 e COBIT 2019", owner: "Segurança da informação", updated: "2026-09-18", read: "4 min", image: "page1.png", steps: ["A versão completa da cartilha está disponível em:", "https://drive.google.com/file/d/1ZF3YU8rZZIOdnsQ1hL8guqeUv8HGCDcv/view?usp=drive_link"], },
      { id: "vpn", title: "Acesso remoto via VPN corporativa", category: "Manual", summary: "Pré-requisitos, instalação do cliente e diagnóstico dos erros mais comuns de conexão remota.", owner: "Infraestrutura", updated: "2026-09-15", read: "7 min", steps: ["Verifique se o usuário possui autorização vigente para acesso remoto.", "Confirme que o dispositivo está atualizado e protegido pelo agente corporativo.", "Instale ou abra o cliente VPN homologado e selecione o perfil da organização.", "Autentique com a conta corporativa e o segundo fator; não compartilhe credenciais.", "Se a conexão falhar, registre o código de erro e verifique rede, data/hora e status do serviço."], warning: "Não instale clientes VPN de terceiros nem contorne políticas de acesso à rede." },
      { id: "phishing", title: "Como reportar e tratar e-mails suspeitos", category: "Segurança", summary: "Orientações para preservar evidências e reduzir o risco ao identificar uma mensagem potencialmente maliciosa.", owner: "Segurança da informação", updated: "2026-09-11", read: "3 min", steps: ["Não clique em links, não abra anexos e não responda à mensagem.", "Use o recurso corporativo de denúncia de phishing para encaminhar a mensagem com cabeçalhos.", "Se houve interação, desconecte o dispositivo da rede quando possível e contate o suporte imediatamente.", "Informe horário aproximado, dispositivo utilizado e ações realizadas; preserve a mensagem original.", "Aguarde a orientação da equipe de Segurança antes de excluir ou encaminhar a mensagem."], warning: "Nunca encaminhe a mensagem suspeita para colegas como forma de alerta." },
      { id: "incidente", title: "Fluxo de escalonamento de incidentes", category: "Fluxo", summary: "Caminho de decisão para incidentes com impacto individual, múltiplas equipes ou possível risco de segurança.", owner: "Operações de TI", updated: "2026-09-08", read: "6 min", steps: ["Receber o alerta ou chamado e confirmar o impacto observado.", "Há indício de exposição de dados, conta comprometida ou malware? Se sim, acione Segurança imediatamente.", "Há indisponibilidade de serviço para várias pessoas? Classifique como incidente e acione a equipe de plantão.", "Se o impacto for individual, siga o procedimento técnico do serviço e mantenha o chamado atualizado.", "Registre linha do tempo, responsáveis, ações de contenção e critério de encerramento."], warning: "Em incidentes de segurança, priorize contenção e comunicação pelo canal oficial de resposta." },
      { id: "estacao", title: "Preparação e entrega de estação de trabalho", category: "Procedimento", summary: "Etapas de configuração segura, inventário e validação antes de entregar um equipamento ao colaborador.", owner: "Suporte local", updated: "2026-09-03", read: "8 min", steps: ["Confira o número de patrimônio e registre o equipamento vinculado ao usuário.", "Instale a imagem corporativa homologada e aplique atualizações de sistema.", "Valide criptografia de disco, proteção de endpoint e políticas de gerenciamento.", "Instale apenas aplicativos aprovados e teste rede, áudio, câmera e periféricos.", "Oriente o usuário sobre bloqueio de tela, atualização e canais de suporte."], warning: "Não entregue o equipamento com conta administrativa compartilhada ou configuração padrão insegura." }
    ];

    // Labels e ícones usados para padronizar categorias na interface e no filtro de navegação.
    const categoryLabels = { Procedimento: "Procedimentos", Manual: "Manuais", Segurança: "Segurança digital", Fluxo: "Fluxos e diagramas" };
    const iconByCategory = {
      Procedimento: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z"/><path d="M14 3.5v5h5M9 13h6M9 16.5h6"/></svg>',
      Manual: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21V5.5Z"/><path d="M4 17a2.5 2.5 0 0 1 2.5-2.5H20M8 7h7"/></svg>',
      Segurança: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3 20 6v5.5c0 4.5-3.4 7.8-8 9.5-4.6-1.7-8-5-8-9.5V6l8-3Z"/><path d="m9 12 2 2 4-4"/></svg>',
      Fluxo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="8" y="3" width="8" height="5" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/><rect x="14" y="16" width="7" height="5" rx="1"/><path d="M12 8v4m-5 4v-3h10v3"/></svg>'
    };

    // Persistência local em localStorage para manter documentos, favoritos e exclusões entre sessões.
    const storage = {
      read(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } },
      write(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { showToast("Não foi possível salvar neste navegador."); } }
    };
    const initialDocumentIds = new Set(initialDocuments.map((doc) => doc.id));
    const deletedDocumentIds = new Set(storage.read("nexo-deleted-documents", []));
    const savedOverrides = storage.read("nexo-document-overrides", []);
    let documents = [
      ...initialDocuments
        .filter((doc) => !deletedDocumentIds.has(doc.id))
        .map((doc) => ({ ...doc, ...savedOverrides.find((savedDoc) => savedDoc.id === doc.id) })),
      ...storage.read("nexo-documents", []).filter((doc) => !deletedDocumentIds.has(doc.id))
    ];
    let favorites = new Set(storage.read("nexo-favorites", []));
    let activeFilter = "all";
    let query = "";
    let sortMode = "recent";
    let currentDocumentId = null;
    let pendingDeleteId = null;

    if (localStorage.getItem("nexo-auth") !== "true") {
      window.location.href = "login.html";
    }

    const list = document.querySelector("#document-list");
    const detailDialog = document.querySelector("#detail-dialog");
    const deleteDialog = document.querySelector("#delete-dialog");
    const createDialog = document.querySelector("#create-dialog");
    const createForm = document.querySelector("#create-form");
    const imageInput = document.querySelector("#new-image");
    const imagePreview = document.querySelector("#image-preview");
    const imagePreviewImg = document.querySelector("#image-preview-img");
    const removeImageButton = document.querySelector("#remove-image");
    let previewObjectUrl = "";
    const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
    const formatDate = (value) => {
      const parts = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short", year: "numeric" }).formatToParts(new Date(`${value}T12:00:00`));
      return ["day", "month", "year"].map((type) => parts.find((part) => part.type === type).value).join(" ");
    };

    function showToast(message) {
      const toast = document.querySelector("#toast");
      toast.textContent = message;
      toast.classList.add("show");
      clearTimeout(showToast.timer);
      showToast.timer = setTimeout(() => toast.classList.remove("show"), 2600);
    }

    function persistDocuments() {
      storage.write("nexo-documents", documents.filter((doc) => !initialDocumentIds.has(doc.id)));
      storage.write("nexo-document-overrides", documents.filter((doc) => initialDocumentIds.has(doc.id)));
      storage.write("nexo-deleted-documents", [...deletedDocumentIds]);
      storage.write("nexo-favorites", [...favorites]);
    }

    function getVisibleDocuments() {
      let visible = documents.filter((doc) => {
        const matchesFilter = activeFilter === "all" || (activeFilter === "favoritos" ? favorites.has(doc.id) : doc.category === activeFilter);
        const searchable = `${doc.title} ${doc.summary} ${doc.category} ${doc.owner} ${(doc.steps || []).join(" ")}`.toLocaleLowerCase("pt-BR");
        return matchesFilter && searchable.includes(query.toLocaleLowerCase("pt-BR"));
      });
      visible.sort((a, b) => sortMode === "az" ? a.title.localeCompare(b.title, "pt-BR") : b.updated.localeCompare(a.updated));
      return visible;
    }

    function updateCounts() {
      document.querySelector("#count-all").textContent = documents.length;
      document.querySelector("#count-favorites").textContent = favorites.size;
      document.querySelectorAll("[data-count]").forEach((element) => {
        element.textContent = documents.filter((doc) => doc.category === element.dataset.count).length;
      });
    }

    // Renderiza a lista visível com filtros, busca e ordenação, atualizando contadores e rótulos da tela.
    function renderDocuments() {
      updateCounts();
      const visible = getVisibleDocuments();
      const heading = activeFilter === "all" ? (query ? "Resultados da busca" : "Atualizados recentemente") : activeFilter === "favoritos" ? "Seus favoritos" : categoryLabels[activeFilter];
      document.querySelector("#list-heading").textContent = heading;
      document.querySelector("#result-count").textContent = `${visible.length} ${visible.length === 1 ? "documento" : "documentos"}`;
      if (!visible.length) {
        list.innerHTML = `<div class="empty-state"><strong>Nenhum documento encontrado</strong><p>Tente outro termo ou selecione uma categoria diferente.</p></div>`;
        return;
      }
      list.innerHTML = visible.map((doc, index) => `
        <article class="doc-card" style="animation-delay:${Math.min(index * 35, 210)}ms">
          <div class="doc-type-icon" aria-hidden="true">${iconByCategory[doc.category] || iconByCategory.Procedimento}</div>
          <div class="doc-main">
            <div class="doc-title-row"><button class="doc-title" type="button" data-open="${escapeHtml(doc.id)}">${escapeHtml(doc.title)}</button>${doc.isNew ? '<span class="new-badge">Novo</span>' : ""}</div>
            <p class="doc-description">${escapeHtml(doc.summary)}</p>
            <div class="doc-meta"><span class="category-tag">${escapeHtml(categoryLabels[doc.category] || doc.category)}</span><span>·</span><span>${escapeHtml(doc.owner || "Equipe de suporte")}</span><span>·</span><span>${formatDate(doc.updated)}</span><span>·</span><span>${escapeHtml(doc.read || "3 min")}</span></div>
          </div>
          <div class="doc-actions">
            <button class="icon-button open-action" type="button" data-open="${escapeHtml(doc.id)}" aria-label="Abrir ${escapeHtml(doc.title)}" title="Abrir documento"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M14 3h7v7m-1-6-9 9"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg></button>
            <button class="icon-button ${favorites.has(doc.id) ? "is-favorite" : ""}" type="button" data-favorite="${escapeHtml(doc.id)}" aria-label="${favorites.has(doc.id) ? "Remover dos" : "Adicionar aos"} favoritos" aria-pressed="${favorites.has(doc.id)}" title="${favorites.has(doc.id) ? "Remover dos favoritos" : "Adicionar aos favoritos"}"><svg viewBox="0 0 24 24" fill="${favorites.has(doc.id) ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.7"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/></svg></button>
          </div>
        </article>`).join("");
    }

    // Abre o modal de detalhe e monta o conteúdo do documento com etapas, aviso e fluxo específico quando houver.
    function openDocument(id) {
      const doc = documents.find((item) => item.id === id);
      if (!doc) return;
      currentDocumentId = id;
      document.querySelector("#detail-kicker").textContent = categoryLabels[doc.category] || doc.category;
      document.querySelector("#detail-title").textContent = doc.title;
      const steps = (doc.steps || []).map((step) => `<li>${escapeHtml(step)}</li>`).join("");
      const flowDiagram = doc.id === "incidente" ? `
        <h3>Diagrama do fluxo</h3>
        <div class="flowchart" role="img" aria-label="Fluxo de escalonamento: avaliar risco de segurança; se houver, acionar Segurança; se não, avaliar abrangência e acionar plantão para múltiplos usuários ou tratar como chamado individual.">
          <div class="flow-node start">Alerta ou chamado recebido</div><div class="flow-link"></div>
          <div class="flow-decision"><span>Decisão 1</span><strong>Há indício de risco à segurança?</strong></div>
          <div class="flow-branches">
            <div class="flow-branch"><span class="flow-branch-label">Sim</span><div class="flow-node alert">Acionar Segurança imediatamente</div></div>
            <div class="flow-branch"><span class="flow-branch-label">Não</span><div class="flow-decision"><span>Decisão 2</span><strong>Várias pessoas afetadas?</strong></div><div class="flow-link"></div><div class="flow-branches"><div class="flow-branch"><span class="flow-branch-label">Sim</span><div class="flow-node">Declarar incidente e acionar plantão</div></div><div class="flow-branch"><span class="flow-branch-label">Não</span><div class="flow-node">Tratar como chamado individual</div></div></div></div>
          </div>
          <div class="flow-link"></div><div class="flow-node start">Registrar linha do tempo e critério de encerramento</div>
        </div>` : "";
      document.querySelector("#detail-content").innerHTML = `
        <p class="detail-summary">${escapeHtml(doc.summary)}</p>
        ${doc.image ? `<img class="detail-image" src="${escapeHtml(doc.image)}" alt="Imagem do documento ${escapeHtml(doc.title)}">` : ""}
        <div class="detail-meta"><span>${escapeHtml(doc.owner || "Equipe de suporte")}</span><span>Atualizado em ${formatDate(doc.updated)}</span><span>${escapeHtml(doc.read || "3 min")}</span></div>
        <div class="detail-content">${flowDiagram}<h3>${doc.category === "Fluxo" ? "Etapas do fluxo" : "Procedimento"}</h3><ol>${steps}</ol></div>
        ${doc.warning ? `<div class="detail-callout"><strong>Atenção:</strong> ${escapeHtml(doc.warning)}</div>` : ""}`;
      detailDialog.showModal();
    }

    function updateImagePreview(source) {
      if (previewObjectUrl) URL.revokeObjectURL(previewObjectUrl);
      previewObjectUrl = "";
      imagePreview.hidden = !source;
      removeImageButton.hidden = !source;
      if (source) imagePreviewImg.src = source;
      else imagePreviewImg.removeAttribute("src");
    }

    function readImageFile(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => resolve(String(reader.result)));
        reader.addEventListener("error", () => reject(reader.error));
        reader.readAsDataURL(file);
      });
    }

    function isSupportedImage(file) {
      return ["image/png", "image/jpeg", "image/gif", "image/webp"].includes(file.type) && file.size <= 1024 * 1024;
    }

    // Formulário de criação/edição: preenche os campos do modal conforme o documento selecionado.
    function openEditor(doc = null) {
      const form = document.querySelector("#create-form");
      form.reset();
      form.dataset.removeImage = "false";
      form.dataset.editingId = doc?.id || "";
      if (previewObjectUrl) URL.revokeObjectURL(previewObjectUrl);
      previewObjectUrl = "";
      updateImagePreview(doc?.image || "");
      document.querySelector("#create-title").textContent = doc ? "Editar documento" : "Adicionar documento";
      form.querySelector('[type="submit"]').textContent = doc ? "Salvar alterações" : "Salvar documento";
      if (doc) {
        form.elements.title.value = doc.title;
        form.elements.category.value = doc.category;
        form.elements.owner.value = doc.owner || "";
        form.elements.summary.value = doc.summary;
        form.elements.steps.value = (doc.steps || []).join("\n");
      }
      createDialog.showModal();
    }

    imageInput.addEventListener("change", () => {
      const file = imageInput.files[0];
      if (!file) return;
      if (!isSupportedImage(file)) {
        imageInput.value = "";
        showToast("Selecione PNG, JPG, GIF ou WebP de até 1 MB.");
        return;
      }
      if (previewObjectUrl) URL.revokeObjectURL(previewObjectUrl);
      previewObjectUrl = URL.createObjectURL(file);
      imagePreview.hidden = false;
      imagePreviewImg.src = previewObjectUrl;
      removeImageButton.hidden = false;
      createForm.dataset.removeImage = "false";
    });

    removeImageButton.addEventListener("click", () => {
      imageInput.value = "";
      createForm.dataset.removeImage = "true";
      updateImagePreview("");
    });

    document.querySelector("#main-nav").addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter]");
      if (button) setFilter(button.dataset.filter, button);
    });
    document.querySelector("#category-nav").addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter]");
      if (button) setFilter(button.dataset.filter, button);
    });
    function setFilter(filter, selectedButton) {
      activeFilter = filter;
      document.querySelectorAll(".nav-item").forEach((button) => button.classList.toggle("active", button === selectedButton));
      renderDocuments();
    }

    list.addEventListener("click", (event) => {
      const favoriteButton = event.target.closest("[data-favorite]");
      const openButton = event.target.closest("[data-open]");
      if (favoriteButton) {
        const id = favoriteButton.dataset.favorite;
        favorites.has(id) ? favorites.delete(id) : favorites.add(id);
        storage.write("nexo-favorites", [...favorites]);
        renderDocuments();
      } else if (openButton) openDocument(openButton.dataset.open);
    });
    document.querySelector("#search-input")?.addEventListener("input", (event) => { query = event.target.value.trim(); renderDocuments(); });
    document.querySelector("#sort-select")?.addEventListener("change", (event) => { sortMode = event.target.value; renderDocuments(); });
    document.querySelector("#featured-open")?.addEventListener("click", () => openDocument("triagem"));
    document.querySelector("#add-document")?.addEventListener("click", () => openEditor());
    document.querySelector("#logout-button")?.addEventListener("click", () => {
      localStorage.removeItem("nexo-auth");
      window.location.href = "login.html";
    });
    document.querySelector("#edit-document").addEventListener("click", () => {
      const doc = documents.find((item) => item.id === currentDocumentId);
      if (!doc) return;
      detailDialog.close();
      openEditor(doc);
    });
    document.querySelector("#delete-document").addEventListener("click", () => {
      const doc = documents.find((item) => item.id === currentDocumentId);
      if (!doc) return;
      pendingDeleteId = doc.id;
      document.querySelector("#delete-copy").textContent = `O documento “${doc.title}” será removido da biblioteca neste navegador.`;
      detailDialog.close();
      deleteDialog.showModal();
    });
    document.querySelector("#confirm-delete").addEventListener("click", () => {
      if (!pendingDeleteId) return;
      deletedDocumentIds.add(pendingDeleteId);
      documents = documents.filter((doc) => doc.id !== pendingDeleteId);
      favorites.delete(pendingDeleteId);
      pendingDeleteId = null;
      persistDocuments();
      deleteDialog.close();
      renderDocuments();
      showToast("Documento excluído.");
    });
    document.querySelectorAll("[data-close]").forEach((button) => button.addEventListener("click", () => button.closest("dialog").close()));
    [detailDialog, createDialog].forEach((dialog) => dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); }));

    // Salva o documento no estado da aplicação e persiste os dados em localStorage.
    createForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const formData = new FormData(form);
      const title = String(formData.get("title")).trim();
      const summary = String(formData.get("summary")).trim();
      const editingId = form.dataset.editingId;
      const existingDoc = documents.find((doc) => doc.id === editingId);
      const imageFile = imageInput.files[0];
      if (imageFile && !isSupportedImage(imageFile)) {
        showToast("Selecione PNG, JPG, GIF ou WebP de até 1 MB.");
        return;
      }
      let image = form.dataset.removeImage === "true" ? "" : existingDoc?.image || "";
      if (imageFile) {
        try {
          image = await readImageFile(imageFile);
        } catch {
          showToast("Não foi possível carregar esta imagem.");
          return;
        }
      }
      const doc = {
        ...(existingDoc || {}),
        id: existingDoc?.id || `doc-${Date.now()}`,
        title,
        category: String(formData.get("category")),
        summary,
        owner: String(formData.get("owner")).trim() || "Equipe de suporte",
        updated: new Date().toISOString().slice(0, 10),
        read: existingDoc?.read || "3 min",
        isNew: existingDoc?.isNew || !initialDocumentIds.has(editingId),
        steps: String(formData.get("steps")).split(/\r?\n/).map((step) => step.trim()).filter(Boolean),
        image
      };
      if (existingDoc) {
        documents = documents.map((item) => item.id === editingId ? doc : item);
      } else {
        documents.unshift(doc);
      }
      persistDocuments();
      updateImagePreview("");
      form.reset();
      delete form.dataset.editingId;
      createDialog.close();
      activeFilter = "all";
      document.querySelectorAll(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.filter === "all"));
      document.querySelector("#search-input").value = "";
      query = "";
      renderDocuments();
      showToast(existingDoc ? "Alterações salvas." : "Documento adicionado à biblioteca.");
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
        event.preventDefault();
        document.querySelector("#search-input").focus();
      }
    });

    renderDocuments();
